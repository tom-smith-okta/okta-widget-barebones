////////////////////////////////////////////////////

require('dotenv').config()

const express = require('express')

const fs = require('fs')

///////////////////////////////////////////////////

// SET UP WEB SERVER
const app = express()

var port = process.env.PORT || 3008

app.use(express.static('public'))

app.listen(port, function () {
	console.log('App listening on port ' + port + '...');
})

//////////////////////////////////////////////////

app.get('/', function (req, res) {

	var error_msg = ''

	var required_vals = [
		'okta_tenant_url',
		'okta_widget_url',
		'okta_widget_css_min'
	]

	fs.readFile('config.json', 'utf8', (err, config_raw) => {
		if (err) {
			error_msg = 'error reading the config.json file'
			console.log(error_msg)
			res.send(error_msg)
			return
		}

		try {
			var config = JSON.parse(config_raw)
		}
		catch(err) {
			error_msg = 'encountered an error parsing the config.json file into json.'

			console.log(error_msg)
			console.dir(err)
			res.send(error_msg)
			return
		}

		fs.readFile('html/index.html', 'utf8', (err, page) => {
			if (err) {
				error_msg = 'error reading the index.html file'
				console.log(error_msg)
				res.send(error_msg)
				return
			}

			for (var i = required_vals.length - 1; i >= 0; i--) {
				this_val = required_vals[i]

				if (!config[this_val]) {
					error_msg = 'could not find required value ' + this_val
					console.log(error_msg)
					res.send(error_msg)
					return
				}
				else {
					var re = new RegExp('{{' + this_val + '}}', 'g')
					page = page.replace(re, config[this_val])
				}
			}

			res.send(page)
		})
	})
})
