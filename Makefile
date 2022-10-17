install:
	docker-compose build

up:
	docker-compose up -d app

down:
	docker-compose down

dc:
	yarn deploy:commands

compile:
	docker-compose up -d compile

up-prod:
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
