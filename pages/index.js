import { Auth } from '@supabase/ui'
import Form from 'components/Form'
import { createClient } from '@supabase/supabase-js'
import React from "react";
/*import { GoTrueClient } from '@supabase/gotrue-js'

const GOTRUE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL

const supabase = new GoTrueClient({ url: GOTRUE_URL })*/


const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

const Container = (props) => {
  const { user } = Auth.useUser()
    /*constructor(props)
    {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
    }*/
    const updateProfileData1 = () => {
        console.log(props.inputRef[0].value)
    }
    async function updateProfileData() {
        const {uuid} = await supabase
            .from('users')
            .select('User UID')
            .match({Email: user.email})
        const {data, error} = await supabase
            .from('profiles')
            .upsert({phone: Form.state.phone,
                first_name: this.state.first_name,
                second_name: this.state.second_name,
                country: this.state.country,
                city: this.state.city,
                })
            .match({id: uuid})
    }
  if (user)
    return (
        <Form />
    )
  return props.children
}

export default function AuthBasic() {
  return (
      <Auth.UserContextProvider supabaseClient={supabase}>
        <Container supabaseClient={supabase}>
          <Auth supabaseClient={supabase} providers={['google', 'facebook', 'github']} />
        </Container>
      </Auth.UserContextProvider>
  )
}