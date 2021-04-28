<template>
  <v-container fluid>
    <v-file-input
      label="Selecione as legendas"
      prepend-icon="mdi-message-text"
      outlined
      append-outer-icon="mdi-send"
      multiple
      chips
      v-model="files"
      @click:append-outer="processSubtitles"
    >
    </v-file-input>
    <div class="pills">
      <pill
        v-for="word in groupedWords"
        :key="word.name"
        :name="word.name"
        :amount="word.amount"
      />
    </div>
  </v-container>
</template>

<script>
import { ipcRenderer } from "electron";
import Pill from "./Pill.vue";

export default {
  components: { Pill },
  data: function () {
    return {
      files: [],
      groupedWords: [],
    };
  },

  methods: {
    processSubtitles() {
      ipcRenderer.send("process-subtitles", this.files);
      ipcRenderer.on("process-subtitles", (event, resp) => {
        this.groupedWords = resp
      });
    },
  },
};
</script>

<style>
.pills {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>