import React, {Component} from 'react';

class Profil extends Component{

    render()
    {

        return (
            <div>
               <table border="1px">
                <tbody>
                <tr>
                <td>Nom</td>
                <td>
                <input id="name" type="text" name="name" />
                </td>
                <td></td>
                </tr>
                <tr>
                <td>PreNom:</td>
                <td>
                <input id="prenom" type="text" name="prenom" />
                </td>
                <td></td>
                </tr>
                <tr>
                <td>Fonction</td>
                <td>
                <input id="Fonction" type="text" name="Fonction" />
                </td>
                <td></td>
                </tr>
                <tr>
                <td>Address Email</td>
                <td>
                <input id="Email" type="text" name="Email" />
                </td>
                <td></td>
                </tr>
                <tr>
                <td>Numéro de téléphone </td>
                <td>
                <input id="numberphone" type="text" name="numberphone" />
                </td>
                <td></td>
                </tr>
                </tbody>
                </table>
            </div>
        );
    }
}

export default Profil;