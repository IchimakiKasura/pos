const accounts = [
    {
        image: "images/users/iyori.jpg",
        user: "iyori",
        password: "backnumber"
    },
    {
        image: "images/users/meg.jpg",
        user: "megumin",
        password: "kazutrash"
    }
]

class Account {
    static Validate()
    {
        let user_pl = か("#input_placeholder_user")
        let pass_pl = か("#input_placeholder_pass")
        let user = か("#user").val()
        let pass = か("#pass").val()
        let isPassed = false;

        user_pl.atr("data-input-show", 0)
        pass_pl.atr("data-input-show", 0)

        // goofy ahh
        accounts.forEach(users=>{
            
            if(user == "" || pass == "") return true;

            if(users.user == user.toLowerCase() && !isPassed)
            {
                user_pl.atr("data-input-show", 0)
                isPassed = true;
                if(users.password == pass)
                {
                    isLogin = true;
                    か("#account_pfp").src(users.image)
                    か("#account_pfp").atr("title", `Logged on as ${user}`)
                    showSelection.showList()
                }
                pass_pl.atr("data-input-show", 1)
            }

            if(!isPassed)
                user_pl.atr("data-input-show", 1)
        })

        return false;
    }
}