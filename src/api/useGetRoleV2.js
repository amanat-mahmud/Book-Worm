import { useEffect, useState } from "react"

const useGetRoleV2 = email => {
    const [role, setRole] = useState(false);
    const [roleLoading, setRoleLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/user?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setRole(data.role);
                    setRoleLoading(false);
                })
        }
    }, [email])
    return [role, roleLoading]
}
export default useGetRoleV2;