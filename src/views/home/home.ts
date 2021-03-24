import { Vue } from "vue-class-component";

const NUMBER_OF_STYLES = 2;

export default class Home extends Vue {
  mounted(): void {
    this.updateReloadCounter();
  }

  get style(): number {
    return localStorage.reloadCounter;
  }

  updateReloadCounter(): void {
    if (localStorage.reloadCounter) localStorage.reloadCounter++;
    else localStorage.reloadCounter = 0;

    localStorage.reloadCounter = localStorage.reloadCounter % NUMBER_OF_STYLES;
  }
}
