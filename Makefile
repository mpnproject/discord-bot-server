install:
	docker-compose build

up:
	docker-compose up -d app

compile:
	docker-compose up -d compile

down:
	docker-compose down

up-prod:
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
