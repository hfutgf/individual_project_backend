const { fetchAll, fetch } = require('../../library/postgres')

const GET_SQL = `
	select
		*
	from orders
`
const POST_SQL = `
	INSERT INTO orders(
		user_name,
		phone_number,
		service_name
	) VALUES($1, $2, $3) RETURNING * ;
`

const get = async () => await fetchAll(GET_SQL);

const post = async ({
	user_name,
	phone_number,
	service_name
}) =>  {
	let posting = await fetch(POST_SQL, user_name, phone_number, service_name);

	if(posting) {
		return "ok"
	}else {
		return 'error'
	}
}

module.exports = {
	get,
	post
}
