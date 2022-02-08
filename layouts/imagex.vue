<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    image: {
      type: String,
      required: true,
    },
    pos: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    var imagepos = "mx-auto"
    if (props.pos == "right") {
        imagepos = "float-right"
    }
    const Alignment = imagepos + ' ' + props.size
    return {Alignment}
  },
})
</script>


<template>
  <div class="slidev-layout image">
      <div class="my-auto ">
          <img :src="image" class="border-image" :class="Alignment">
          <slot />
      </div>
      <RGBBar></RGBBar>
  </div>
</template>