FROM openjdk:14

ENV ENVIRONMENT=prod

MAINTAINER Christopher Siem <christopher.siem@gmail.com>

ADD booster-app/target/moodBoost.jar app.jar

CMD ["sh", "-c", "java -Dserver.port=$PORT -Dspring.data.mongodb.uri=$MONGODB_URI -Dauth.jwt.secret=$JWT_SECRET "]
