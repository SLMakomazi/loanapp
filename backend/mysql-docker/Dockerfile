FROM mysql:8

# Set root password
ENV MYSQL_ROOT_PASSWORD=admin

# Create database
ENV MYSQL_DATABASE=loanappDB

# Create user and grant privileges
ENV MYSQL_USER=admin
ENV MYSQL_PASSWORD=admin

# Copy initialization script
COPY init.sql /docker-entrypoint-initdb.d/

# Expose MySQL port
EXPOSE 3306