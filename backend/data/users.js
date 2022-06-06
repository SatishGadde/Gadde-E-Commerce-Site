import bcrypt from "bcryptjs"

const users =[
    {
        name : 'Admin User',
        email : 'admin@example.com',
        password :bcrypt.hashSync('123456',10),
        isAdmin : true

},
{
    name : 'Satish Gadde',
    email : 'gadde@example.com',
    password :bcrypt.hashSync('123456',10),
    

},
{
    name : 'Maya',
    email : 'maya@example.com',
    password : bcrypt.hashSync('123456',10),
    
},]

export default users