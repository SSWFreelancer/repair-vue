<template>
  <div :class="{ popup: true, open: isPopupOpen }" id="popup">
    <span class="popup__close" @click="closePopup"></span>
    <div class="popup__content">
      <div class="popup__close"></div>
      <Form2 />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.popup {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  z-index: 1001;
  overflow-y: auto;
  overflow-x: hidden;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 35px 15px;
  transition: all 0.3s ease 0s;
  &.open {
    pointer-events: auto;
    opacity: 1;
    visibility: visible;
  }
  & > .popup__close {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 0;
    cursor: pointer;
    height: 100%;
  }
  &__content {
    position: relative;
    z-index: 1;
    max-width: 600px;
    width: 100%;
    & > .popup__close {
      position: absolute;
      right: -20px;
      top: -20px;
      width: 25px;
      pointer-events: none;
      z-index: 0;
      height: 25px;
      &:after,
      &:before {
        content: "";
        position: absolute;
        background-color: $main;
        top: 50%;
        left: 50%;
        height: 2px;
        width: 100%;
        transform: translate(-50%, -50%) rotate(-45deg);
      }
      &:before {
        transform: translate(-50%, -50%) rotate(45deg);
      }
      @media (max-width: 630px) {
        right: -10px;
        width: 23px;
        height: 23px;
        top: -25px;
      }
    }
  }
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters, mapActions } from "vuex";
import Form2 from "@/components/Form2.vue";
@Component({
  components: {
    Form2,
  },
  computed: {
    ...mapGetters({
      isPopupOpen: "isPopupOpen",
    }),
  },
  methods: {
    ...mapActions(["closePopup"]),
  },
})
export default class Popup extends Vue {
  popupPhone = null;
  popupName = null;
}
</script>
