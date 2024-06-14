export default {
  name: 'App_input',
  template: `
      <input
        :type="type"
        :name="name"
        v-model="input_value"
        @blur='update_value'
        v-bind="attrs"
      />
  `,
  props: {
    type: {
      type: String,
      default: 'text',
      required: true
    },
    name: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      input_value: ''
    }
  },
  methods: {
    update_value() {
      const value = {
        name: this.name,
        value: this.input_value
      }
      this.$emit('update_value', value)
    },
  },
  computed: {
    attrs() {
      return this.$attrs || {}
    },
  },
  inheritAttrs: false,
}
