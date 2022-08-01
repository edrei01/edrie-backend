import { transporter } from '../config/mailer.js'
import { v4 as uuidv4 } from "uuid";


const email_password = async (req, res) => {
    const token = uuidv4();
    const email = req.body.email;
    const url = `http://dreco.ddns.net/password?${token}&email=${email}`
    console.log(email)
    await transporter.sendMail({
        from: '"Edrei Alvarez" <203140@ids.upchiapas.edu.mx>', // sender address
        to: email, // list of receivers
        subject: "🔑Password Recovery🔑", // Subject line
        html:  `<tr>
        <a href='${url}' align="center" bgcolor="#2F67F6" role="presentation" style="border:none;border-radius:3px;color:#ffffff;cursor:auto;padding:15px 25px;" valign="middle">
            <p style="background:#2F67F6;color:#ffffff;font-family:'Helvetica Neue',Arial,sans-serif;font-size:15px;font-weight:normal;line-height:120%;Margin:0;text-decoration:none;text-transform:none;">
                Confirm Tu Email
            </p>
        </a>
    </tr>`
    });
    return res.status(200).json({ succes: 'Correo enviado Con exito' });

}
export const emailController = { email_password };