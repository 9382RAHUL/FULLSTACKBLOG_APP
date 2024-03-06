
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
export const GET = async (req,{params}) => {
    // const {searchParams}=new URL(req.url);
    const {slug}=params
   try{
    const post = await prisma.post.update({
        where:{slug},
        data:{views:{increment:1}},
        include:{user:true},
    })
    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ messege: "Something went wrong" }, { status: 500 })
    );
  }
};


// import { getAuthSession } from "@/utils/auth";
// import prisma from "@/utils/connect";
// import { NextResponse } from "next/server";

// export const GET = async (req) => {
//   const { searchParams } = new URL(req.url);

//   const page = searchParams.get("page");
//   const cat = searchParams.get("cat");

//   const POST_PER_PAGE = 2;

//   const query = {
//     take: POST_PER_PAGE,
//     skip: POST_PER_PAGE * (page - 1),
//     where: {
//       ...(cat && { catSlug: cat }),
//     },
//   };

