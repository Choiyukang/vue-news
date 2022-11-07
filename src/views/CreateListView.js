import bus from "@/utils/bus";
import ListView from "@/views/ListView.vue";

export default function createListView(name) {
  return {
    //재사용 할 인스턴스(컴포넌트) 옵션
    name: name,
    created(){
      bus.$emit("start:spinner");
        this.$store
          .dispatch("FETCH_LIST", this.$route.name)
          .then(() => {
            console.log("fetched");
            bus.$emit("end:spinner");
          })
          .catch(() => {
            console.log("error");
            bus.$emit("end:spinner");
          });
    },
    render(createElement) {
      return createElement(ListView);
    },
  };
}
