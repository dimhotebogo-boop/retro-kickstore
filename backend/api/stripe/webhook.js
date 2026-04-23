
import { supabaseAdmin } from "../../lib/supabaseAdmin.js"

export default async function handler(req,res){
  const event = req.body

  if(event.type === "checkout.session.completed"){
    await supabaseAdmin.from("orders").insert([{status:"paid"}])
  }

  res.json({received:true})
}
