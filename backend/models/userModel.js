  import { shema } from 'mongoose';

const userShema = new Shema ({
  userName:
    type: string,
  required: true
},
messages: [{ type: shema.Type.ObjectId. ref:'Message' }]
                             });

export default userShema;
