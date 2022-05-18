import { Route , Redirect } from "react-router-dom";

function AdminRoute({ component : Component,...rest }){

    const currentUser  = useAuth();

    return(
        <Route>
            
        </Route>
    )

}