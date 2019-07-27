help:	## ~~~~~~>	Show this help.
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

build:	## ~~~~~~>	Builds the app ready for prod.
	@npm run build

clean:	## ~~~~~~>	Cleans the build directory.
	@rm -rf ./build


lint:	## ~~~~~~>	Lint everything.
	@tslint ./src/*.tsx

start:	## ~~~~~~>	Runs the app in dev mode at `localhost:3000`. Includes hot reloads.
	@npm start

test:	## ~~~~~~>	Runs the tests.
	@npm test
