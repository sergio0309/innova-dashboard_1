//funcion que me permita entregar un recurso

import { NextResponse } from "next/server";

export async function GET( request: Request){
    console.log(request);

    return NextResponse.json({
        message: "Hola Mundo"
    })
}