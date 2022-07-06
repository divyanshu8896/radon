const userModel = require('../models/userModel')

const cutSpace = function (value) {
    try {
        return value.replace(/\s+/g, " ")
    } catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }
}

const createUser = async function (req, res) {
    try {

        let { title, name,  phone, email, password,} = req.body

        let titleName = cutSpace(title)
        req.body.title = titleName
        let Name = cutSpace(name)
        req.body.name = Name

        if (Object.keys(req.body).length == 0) {
            return res.status(400).send({ status: false, msg: "Please enter data in the request body" })
        }

        
        if (!title) {
            return res.status(400).send({ status: false, msg: "title is missing" })
        }
        if (!(title == "Mrs" || title == "Mr" || title == "Miss")) {
            return res.status(401).send({ error: "title has to be Mr or Mrs or Miss " })
        }
        
        if (!name) {
            return res.status(400).send({ status: false, msg: "name is missing" })
        }
        
        if (name.trim().length !== 0) {
            if (!/^[a-zA-Z_ ]+$/.test(name)) {
                return res.status(400).send({ status: false, msg: "Enter valid name" });
            }
        }else{
          return res.status(400).send({ status: false, msg: "please enter name in correct format" });
        }
       

        if (!phone) {
            return res.status(400).send({ status: false, msg: "phone no  is missing" })
        }
        if (! /^[6-9]\d{9}$/.test(phone)) {
            return res.status(400).send({ status: false, msg: "phone no is not valid" })
        }
        let uniquePhone = await userModel.findOne({ phone: req.body.phone })
        if (uniquePhone) {
            return res.status(400).send({ status: false, msg: `${phone} already exists` })
        }

        if (!email) {
            return res.status(400).send({ status: false, msg: "email is missing" })
        }

        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return res.status(400).send({ status: false, msg: "Enter a valid emailId" });
        }
        let uniqueEmail = await userModel.findOne({ email: email })
        if (uniqueEmail) {
            return res.status(400).send({ status: false, msg: `${email} already exists` })
        }

        if (!password) {
            return res.status(400).send({ status: false, msg: "password is missing" })
        }
        if (!/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/.test(password)) {
            return res.status(400).send({ status: false, msg: "Enter a valid password" });
        }


        let savedData = await userModel.create(req.body)
        return res.status(201).send({ status: true, msg: " you are registered successfully", data: savedData })

    } catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }
}

const loginUser = async function (req, res) {
    try {
        let { email, password } = req.body;

        if (Object.keys(req.body).length == 0) {
            return res.status(400).send({ status: false, msg: "please enter data in request body" })
        }

        if (!email) {
            return res.status(400).send({ status: false, msg: "please enter email" })
        }

        if (!password) {
            return res.status(400).send({ status: false, msg: "please enter password " })
        }

        let user = await authorModel.findOne({ email: email, password: password });
        if (!user) {
            return res.status(400).send({ status: false, msg: "email or password is incorrect " })
        }

        let token = jwt.sign(
            {
                authorId: user._id.toString(),
                batch: "radon",
                organisation: "functionUp"
            },
            "WaJaiDhi-radon"
        )

        res.setHeader("x-api-key", token)

        return res.status(200).send({ status: true, msg: "you are successfully loggedin", data: token })
    } catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }
}

module.exports = {
    createUser,
    loginUser
}