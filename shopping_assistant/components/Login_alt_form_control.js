export default {
  name: 'Login_alt_form_control',
  template: `<button class='alt_form_button' @click='update_parent'>{{ button_text }}</button>`,

  props: {
    alt_method: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      button_text: 'Sign In',
      end_point: 'Sign In'
    }
  },
  methods: {
    update_parent() {
      let new_values= {
        submit_button_text: this.button_text,
        submit_end_point: this.end_point,
        name: this.button_text 
      }
      this.alt_method(new_values)
      this.button_text = this.button_text === 'Sign In' ? 'Sign Up' : 'Sign In'
      this.end_point = this.button_text
    }
  },
}