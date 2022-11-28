import { useEffect, useState } from "react"

const useGetRoleV2 = email => {
    const [role, setRole] = useState(false);
    const [roleLoading, setRoleLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://book-worm-server-omega.vercel.app/user?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    setRole(data.role);
                    setRoleLoading(false);
                })
        }
    }, [email])
    return [role, roleLoading]
}
export default useGetRoleV2;