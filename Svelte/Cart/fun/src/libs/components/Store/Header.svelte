<script>
  import { username, time, uptime } from "../../stores/index";
  import { formatter } from "../../utils/index";
</script>

<header class="header">
  <div class="user-info">
    <span class="username">{$username}</span>
    <span class="login-time">Tempo logado: {$uptime}s</span>
  </div>
  <div class="current-time">
    <span class="time-label">Hora: </span>
    <span class="hour">{formatter.format($time)}</span>
    <span class="cartButton"><a href="/cart">🛒</a></span>
  </div>
</header>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5em;
    background-color: #2c3333;
    color: #fff;
  }

  .username {
    font-weight: bold;
    background-color: #0e8388;
    padding: 0.5em;
    border-radius: 8px;
  }

  .current-time {
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: center;
  }

  .time-label {
    font-weight: bold;
  }

  .cartButton a {
    font-size: xx-large;
    text-decoration: none;
    background-color: white;
    border-radius: 50%;
    padding: 0.5rem;
    margin-left: 0.5em;
    text-align: center;
    cursor: pointer;
  }
</style>
