const pgConfig = {
   connectionString: 'postgres://qrisnxiklktgrx:ae58370566b492b8448115920810173fe248cc3b9e61c4f11a64e2fafe7ae294@ec2-34-200-35-222.compute-1.amazonaws.com:5432/d9au65d480o1lf',
   ssl: {
      rejectUnauthorized: false
   }
}

// `psql --host=ec2-34-200-35-222.compute-1.amazonaws.com --port=5432 --username=qrisnxiklktgrx --password --dbname=d9au65d480o1lf`

module.exports = {
   pgConfig
}

