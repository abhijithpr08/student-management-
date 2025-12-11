import Student from "../models/Student";

//create
export const createStudent = async (req,res) => {
    try{
        const student = await Student.createStudent(req.body)
        res.json(student)
    } 
    catch{
        res.status(400).json({error: error.message})
    }
}

//read
export const getStudents = async (req,res)=>{
    const students = await Student.find(req.body)
    res.json(students)
}

// update
export const updateStudent = async (req,res)=>{
    try{
        const updated = await Student.findByIdAndUpdate(
            req.params.id, 
            req.body,
            {new:true}
        )
        res.json(updated)
    }
    catch{
        res.status(400).json({error:error.message})
    }
}

// delete
export const deleteStudent = async (req,res)=>{
    await Student.findByIdAndDelete(req.params.id)
    res.json({message:"Delete student"})
}