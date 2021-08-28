exports.up = async function up(sql) {
  await sql`
		CREATE TABLE ingredients (
			dishes_id INT REFERENCES dishes(id) ON DELETE CASCADE NOT NULL,
			ingredients varchar(50) NOT NULL,
			amount varchar(40) NOT NULL,
		)
	`;
};

exports.down = async function down(sql) {
  await sql`
		DROP TABLE event_user
	`;
};
