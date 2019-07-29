help:		## ~~~~~~>	Show this help.
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

build:		## ~~~~~~>	Builds the app ready for prod.
	@npm run build

clean:		## ~~~~~~>	Cleans the build directory.
	@rm -rf ./build

lint:		## ~~~~~~>	Lint everything.
	@echo "Woop, Woop, it's the sound of the Po-lint... 🚔"
	@tslint ./src/*.tsx
	@echo "Linting completed successfully, you are free to go. 🤘"

precommit:	## ~~~~~~>	Lint and Test.
	@make lint && npm test -- --watchAll=false

start:		## ~~~~~~>	Runs the app in dev mode at `localhost:3000`. Includes hot reloads.
	@npm start

test:		## ~~~~~~>	Runs the tests.
	@npm test
