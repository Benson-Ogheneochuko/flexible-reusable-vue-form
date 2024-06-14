import App_input from './App_input.js';

const fall_back_fields = [
  {
    type: 'text',
    name: 'name',
    placeholder: 'choose a user name',
    autocomplete: 'name',
  },
  {
    type: 'email',
    name: 'email',
    placeholder: 'email',
    autocomplete: 'email',
  },
  {
    type: 'password',
    name: 'password',
    placeholder: 'choose a password',
    autocomplete: 'password',
  }
];
//   <a href='#' @click='change_end_point' class='alt_form'> {{ alt_form }} </a>

export default {
  name: 'App_access_form',
  components: {
    App_input
  },
  template: `
  <div class='access_form_container'>
    <slot 
      name='alt_form_control'
      :alt_method='alt_method'
    ></slot>
    <form :name='form_name' :class='[form_classes]' @submit.prevent='handle_submit'>
      <h1 class='form_name'>{{ name }}</h1>
      <App_input
        class='input'
        v-for="(field, index) in filtered_fields"
        :key="field.name"
        v-bind="field"
        @update_value="update_value"
      />
      <button class='access_button' type='submit'> {{ submit_button_text }} </button>
    </form>
  </div>
  `,
  props: {
    input_fields: {
      type: Array,
      default: fall_back_fields,
    },
    _submit_button_text: {type: String, default: 'Submit'},
    form_end_point: {type: String, default: 'Submit'},
    signUp: { type: Boolean, default: true },
    form_name: { type: String, default: 'Sign Up' },
    element_class: { type: Object, default: () => ({ base_class: 'grid_container access_form', unique_class: '' }) }
  },
  data() {
    return {
      // fields: this.input_fields || [],
      name: this.form_name || '',
      submit_end_point: this.form_end_point || '',
      formData: {},
      submit_button_text: this._submit_button_text || ''
    }
  },
  methods: {
    update_value(value) {
      this.formData[value.name] = value.value
    },
    handle_submit() {
      console.log(this.formData)
    },
    alt_method(new_values){
      for (const [key, value] of Object.entries(new_values)){
        this[key] = value;
      }
    }
  },
  computed: {
    form_classes() {
      return `${this.element_class.base_class} ${this.element_class.unique_class}`;
    },
    filtered_fields() {
      let fields= this.name.toLowerCase().includes('sign in') 
        ? this.input_fields.filter(input_field => input_field.name.toLowerCase() !== 'name')
        : this.input_fields
      return fields
    }
  }
}