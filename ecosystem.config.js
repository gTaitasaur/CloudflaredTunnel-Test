module.exports = {
    apps: [
      {
        name: 'pomodoro-backend',
        script: './Backend/server.js',
        env: {
          NODE_ENV: 'production',
          PORT: 3001
        },
        cwd: './Backend',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '1G'
      }
    ]
  };