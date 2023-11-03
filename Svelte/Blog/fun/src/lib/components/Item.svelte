<script>
  /**
   * @type {{ title: any; date: any; }}
   */
  export let metadata;
  /**
   * @type {any}
   */
  export let link;
</script>

<div class="card">
  <h2 class="card-title">{metadata.title}</h2>
  <p class="card-date">{metadata.date}</p>
  <a href={link} class="card-link">Read More</a>
</div>

<style>
  .card {
    background-color: #2c3333;
    color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    text-align: center;
    flex: 1;
    border: 1px solid #0e8388;
  }

  .card-title {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .card-date {
    font-size: 14px;
    margin-bottom: 10px;
  }

  .card-link {
    color: #0e8388;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
</style>
