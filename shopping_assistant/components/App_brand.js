export default {
  name: 'App_brand',
  template: `
    <span :class="['fluid_width app_brand overlay', appBrandClass]">
      <h1 :class="['brand_name', brandNameClass]">shopping assistant</h1>
    </span>
  `,
  props: {
    appBrandClass: {
      type: String,
      default: ''
    },
    brandNameClass: {
      type: String,
      default: ''
    }
  }
}