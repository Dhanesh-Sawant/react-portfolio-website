import { useRef } from 'react';
import { storage, db, auth } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc } from 'firebase/firestore';
import { collection } from 'firebase/firestore';

// import {firebase} from 'firebase';

import {signOut} from "firebase/auth";

const Home = () => {

    const form = useRef();

    const submitPortfolio = (e) => {

        alert("going to submit")
        e.preventDefault();
        const name = form.current[0]?.value;
        const description = form.current[1]?.value;
        const url = form.current[2]?.value;
        const image = form.current[3]?.files[0];

        console.log(description, url, image)

        const storageRef = ref(storage, `portfolio/${image.name}`);

        uploadBytes(storageRef, image).then(
            (snapshot) => {
                getDownloadURL(snapshot.ref).then((downloadUrl) => {
                    console.log('Image URL:', downloadUrl);
                    alert('succesfully added to storage')
                    savePortfolio({
                        name,
                        description,
                        url,
                        image: downloadUrl
                    })
                }, (error) => {
                    console.log(error);
                    savePortfolio({
                        // name,
                        description,
                        url,
                        image: null
                    })
                })
            }, (error) => {
                console.log(error);
                savePortfolio({
                    // name,
                    description,
                    url,
                    image: null
                })
            }
        )
    }

    const savePortfolio = async (portfolio) => {
        try {
            await addDoc(collection(db, 'portfolio'), portfolio);
            window.location.reload(false);
            alert('successfully added portfolio')
        } catch (error) {
            console.log(error)
            // alert('Failed to add portfolio');
        }
    }

    // const signOutFunc = ()=>{
    //     firebase.auth().signOut()
    // }

    const handleLogout = () => {               
        signOut(auth).then(() => {
            console.log("Signed out successfully")
        }).catch((error) => {
        });
    }



    return (
        <div className="dashboard">

            <form ref={form}  onSubmit={submitPortfolio}>
                <p><input type="text" name='name' placeholder="Name" /></p>
                <p><textarea name='desc' placeholder="Description" /></p>
                <p><input name='url' type="text" placeholder="Url" /></p>
                <p><input name= 'image' type="file" placeholder="Image" /></p>
                <button type="submit">Submit</button>
                <br></br>
            </form>
            <button onClick={() => handleLogout()}>Sign out</button>
        </div>
    )
}

export default Home;