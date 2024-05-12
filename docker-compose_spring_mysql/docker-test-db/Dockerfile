FROM mysql:8.0

# coppy 가 되는 순간 자동으로 init.sql 자동 실행
COPY init.sql /docker-entrypoint-initdb.d

# 아무나 들어올 수 있도록
ENV MYSQL_HOST=% 
ENV MYSQL_ROOT_PASSWORD=root1234
ENV MYSQL_DATABASE=metadb


CMD ["--character-set-server=utf8mb4", "--collation-server=utf8mb4_unicode_ci"]






