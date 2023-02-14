<script setup>
import SwitchTheme from '../components/SwitchTheme.vue';
import MenuItem from "../components/MenuItem.vue";
import Modal from "../components/Modal.vue";
import { useBoardStore } from "../store/board"

const props = defineProps({
  classes: {
    type: String,
  },
});
const boardData = useBoardStore()

</script>

<template>
  <aside :class="classes"
    class="bg-slate-100 dark:bg-slate-700 border-gray-300 dark:border-slate-500 border-r flex flex-col justify-between ">
    <div>
      <h3 class="text-slate-500 dark:text-slate-300 text-bold px-4 py-3 font-bold">All board <span>{{
        boardData.board.length
      }}</span></h3>
      <ul class="flex flex-col gap-1">
        <MenuItem v-for="route in boardData.board" :to="`/board/${route.id}`" :key="route.id" :label="route.name" />
        <button class=" w-11/12 block pl-4 py-3  text-violet-500 text-[16px] font-bold
    hover:text-violet-600 rounded-r-3xl cursor-pointer ">
          <li class="flex items-center  gap-6">
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"
                fill="currentColor"></path>
            </svg>
            <span class="text-[16px] dark:text-slate-300">
              + create board
            </span>
          </li>

        </button>
      </ul>
    </div>
    <footer class=" pb-4 w-11/12 mx-auto">
      <SwitchTheme />
      <div class="flex  items-center mt-3 text-slate-500 dark:text-slate-300 text-bold">
        <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg" style="margin-right: 15px;">
          <path
            d="M8.522 11.223a4.252 4.252 0 0 1-3.654-5.22l3.654 5.22ZM9 12.25A8.685 8.685 0 0 1 1.5 8a8.612 8.612 0 0 1 2.76-2.864l-.86-1.23A10.112 10.112 0 0 0 .208 7.238a1.5 1.5 0 0 0 0 1.524A10.187 10.187 0 0 0 9 13.75c.414 0 .828-.025 1.239-.074l-1-1.43A8.88 8.88 0 0 1 9 12.25Zm8.792-3.488a10.14 10.14 0 0 1-4.486 4.046l1.504 2.148a.375.375 0 0 1-.092.523l-.648.453a.375.375 0 0 1-.523-.092L3.19 1.044A.375.375 0 0 1 3.282.52L3.93.068a.375.375 0 0 1 .523.092l1.735 2.479A10.308 10.308 0 0 1 9 2.25c3.746 0 7.031 2 8.792 4.988a1.5 1.5 0 0 1 0 1.524ZM16.5 8a8.674 8.674 0 0 0-6.755-4.219A1.75 1.75 0 1 0 12.75 5v-.001a4.25 4.25 0 0 1-1.154 5.366l.834 1.192A8.641 8.641 0 0 0 16.5 8Z"
            fill="currentColor"></path>
        </svg>
        <span class="font-bold">
          hide Sidebar
        </span>
      </div>
    </footer>
    <Modal title="Create board" />
  </aside>
</template>