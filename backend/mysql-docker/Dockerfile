FROM mysql:8

# Set environment variables
ENV MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD}
ENV MYSQL_DATABASE=${MYSQL_DATABASE}
ENV MYSQL_USER=${MYSQL_USER}
ENV MYSQL_PASSWORD=${MYSQL_PASSWORD}

# Copy initialization scripts
COPY ./init.sql /docker-entrypoint-initdb.d/

# Expose MySQL port
EXPOSE 3306

# Use the root user to ensure proper permissions
USER root

# Set the working directory
WORKDIR /docker-entrypoint-initdb.d

# Ensure the script is executable
RUN chmod +x /docker-entrypoint-initdb.d/init.sql

# Use the official entrypoint
ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["mysqld"]