import App_brand from '../components/App_brand.js'
import App_access_form from '../components/App_access_form.js'
import Login_alt_form_control from '../components/Login_alt_form_control.js'

export default {
  name: 'Login_view',
  components: {
    App_brand, App_access_form, Login_alt_form_control
  },
  template: `
    <div class='brand_container flex_container'>
      <App_brand />
      <App_access_form>
        <template v-slot:alt_form_control="{ alt_method }">
          <Login_alt_form_control :alt_method="alt_method" />
        </template>
      </App_access_form>
    </div>
  `
}