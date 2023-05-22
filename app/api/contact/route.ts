
import { NextRequest, NextResponse } from "next/server";

const fs = require('fs');
const path = require('path');

 export async function POST(request:NextRequest)  {
    const data =  await request.json();

    //READ DB - json file 
    const filePath = path.resolve(process.cwd(), 'app/data/submission.json');

    let submissions: any = [];

    try{
        const data =fs.readFileSync(filePath,"utf8");
        submissions = JSON.parse(data);
    }catch(error) {
        console.error("Error reading the file",error);
    }

    submissions.push(data);
    //Parse the Json + add the new data + write in JSON File again 

    try{
 const newData = JSON.stringify(submissions,null,2)
 fs.writeFileSync(filePath, newData , "utf8")
    }catch(error){
    console.error("Error writing theFile",error)
    }

    return NextResponse.json({
        data: data,
        message: "Submission Successful"
    })

 }


export async function GET() {
    return NextResponse.json({
        message:"Its time to code "
    })
}