<template>
  <div :class="['mesa', mesaClass]">
    <div v-for="(seat, index) in seatPositions" :key="index" :style="seat.style" class="seat"></div>
    <div class="mesa-numero">M-{{ numero }}</div>
  </div>
</template>

<script>
export default {
  props: {
    capacity: {
      type: Number,
      required: true
    },
    numero: {
      type: String,
      required: true
    }
  },
  computed: {
    mesaClass() {
      return this.capacity > 6 ? 'mesa-grande' : 'mesa-pequena';
    },
    seatPositions() {
      const positions = [];
      if (this.capacity <= 6) {
        for (let i = 0; i < this.capacity; i++) {
          positions.push({ style: this.getSmallTableSeatStyle(i) });
        }
      } else {
        for (let i = 0; i < this.capacity; i++) {
          positions.push({ style: this.getLargeTableSeatStyle(i) });
        }
      }
      return positions;
    }
  },
  methods: {
    getSmallTableSeatStyle(index) {
      if (this.capacity === 2) {
        const styles = [
          { top: '-10px', left: '40px' },
          { bottom: '-10px', left: '40px' }
        ];
        return styles[index % styles.length];
      }

      const styles = [
        { top: '-10px', left: '40px' },
        { top: '40px', left: '-10px' },
        { top: '40px', right: '-10px' },
        { bottom: '-10px', left: '40px' },
        { top: '-10px', right: '40px' },
        { bottom: '-10px', right: '40px' },
      ];
      return styles[index % styles.length];
    },
    getLargeTableSeatStyle(index) {
      const styles = [
        { top: '-10px', left: '80px' },
        { top: '40px', left: '-10px' },
        { top: '40px', right: '-10px' },
        { bottom: '-10px', left: '80px' },
        { top: '-10px', left: '40px' },
        { bottom: '-10px', left: '40px' },
        { top: '-10px', right: '40px' },
        { bottom: '-10px', right: '40px' },
      ];
      return styles[index % styles.length];
    }
  }
}
</script>

<style scoped>
.mesa {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.mesa-pequena {
  width: 100px;
  height: 100px;
  background-color: #ccc;
  border-radius: 10px;
}

.mesa-grande {
  width: 200px;
  height: 100px;
  background-color: #ccc;
  border-radius: 10px;
}

.seat {
  width: 20px;
  height: 20px;
  background-color: #999;
  position: absolute;
}

.mesa-numero {
  position: absolute;
  font-size: 1.2em;
  font-weight: bold;
  color: #333;
}
</style>