var chargen_skills = Array(
	{
		name: "Test Skill",
		attribute: "Agility",
		book: books_list[0],
		prereqs: Array(
		),
		page: "p123"
	}
);

/*
chargen_skills.sort(
	function(a, b)
	{
		var textA = a.name.toUpperCase();
		var textB = b.name.toUpperCase();
		return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
	}
);
*/