import { Auth, Typography, Button } from '@supabase/ui'
import {Input, IconPhone, IconUser, IconMap, IconMapPin} from '@supabase/ui'
import { createClient } from '@supabase/supabase-js'
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
            .upsert({phone: this.inputRef.current.value,
                first_name: document.getElementById('first-name_input').value,
                second_name: document.getElementById('second-name_input').value,
                country: document.getElementById('country_input').value,
                city: document.getElementById('city_input').value,
                })
            .match({id: uuid})
    }
  if (user)
    return (
        <>
            <Input
                id="phone_input"
                label="Phone Number"
                placeholder="+380(__)___-____"
                icon={<IconPhone />}
                type="tel"
            />
            <Input
                id="first-name_input"
                label="First Name"
                placeholder="John"
                icon={<IconUser />}
            />
            <Input
                id="second-name_input"
                label="Last Name"
                placeholder="White"
                icon={<IconUser />}
            />
            <Input
                id="country_input"
                label="Country"
                placeholder="Ukraine"
                icon={<IconMap />}
            />
            <Input
                id="city_input"
                label="City"
                placeholder="Kyiv"
                icon={<IconMapPin />}
            />
            <Button success onClick={updateProfileData1}>
                Update
            </Button>
          <Typography.Text>Signed in: {user.email}</Typography.Text>
          <Button block onClick={() => props.supabaseClient.auth.signOut()}>
            Sign out
          </Button>
        </>
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