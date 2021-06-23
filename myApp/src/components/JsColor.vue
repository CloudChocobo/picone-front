<template>
  <div>
    Select color: <input data-jscolor="{preset:'dark large'}">
  </div>
</template>

<script>
import jscolor from 'jscolor';
export default {
  name: 'jscolor',
  data(){
    return {
      color: ''
    }
  },
  props: [
    'value',
    'id'
  ],
  methods: {

  },
  mounted: function () {
    const jscolor = document.createElement("script");
    jscolor.setAttribute(
        "src",
        'jscolor'
    );
    jscolor.async = true;
    document.head.appendChild(jscolor);
  },

}

</script>