
// .get

getStudents = (req, res, next) => {
  let query;
  if(req.query.name) {
    query = req.models.Students.findOne({ 'name': req.query.name })
  }
  else
  {
    query = req.models.Students.find()
  }

  query.exec().then((Students) => {
      return res.send(Students);
    }).catch((error) => {
      next(error)
    })
}

// .post 

createStudents = (req, res, next) => {
	req.models.Students.create({
		name: req.body.name,
		email: req.body.email,
			address: {
				street: req.body.address.street,
				zipcode: req.body.address.zipcode,
				city: req.body.address.city,
			}
		}).then((Students) => {
			return res.status(201).send(Students)
		}).catch((error) => {
			next(error)
		})
}

// .get:id 

getStudentsId = (req, res, next) => {
	req.models.Students.findById(req.params.id).then((Students) => {
		return res.send(Students)
	})
}

// .delete
deleteStudents = async (req, res, next) => {
  try {
    const deleted = await req.models.Students.findByIdAndDelete(req.params.id);
    if (deleted) {
      console.log(deleted);
      return res.send(deleted);
    }
    return res.sendStatus(204);
  } catch (error) {
    return next(error);
  }
}

// .put

replaceStudents = (req, res, next) => {
	req.models.Students.updateOne({_id: req.params.id}, 
		{
			name: req.body.name,
			email: req.body.email,
			address: {
				street: req.body.address.street,
				zipcode: req.body.address.zipcode,
				city: req.body.address.city, 
			}
		},
		{
			new: true,
			upsert: true,
			runvalidators: true,
		}).then((status) => {
			console.log('status:', status)
				if (status.upserted)
					res.status(201) //skapad
				else if (status.unModified)
					res.status(200) // uppdaterad
				else 
				res.status(204) // inte ändrad
			res.send()
		}).catch((error) => next(error))
}

module.exports = {
	getStudents: getStudents,
	createStudents: createStudents,
	getStudentsId: getStudentsId,
	deleteStudents: deleteStudents,
	replaceStudents: replaceStudents
}