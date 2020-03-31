import { Shema } from 'mongoose';
const messageShema = new Shema ({
  msg:{
    type:string,
    required: true
    },
    userName: { type:Shema.Types.ObjectId, ref: 'User' }
    });
    
    export default messageShema;
