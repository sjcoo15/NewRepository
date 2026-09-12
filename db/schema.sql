CREATE TABLE IF NOT EXISTS workout_history (
  id BIGSERIAL PRIMARY KEY,
  device_id TEXT NOT NULL,
  exercises INTEGER NOT NULL DEFAULT 5,
  completed_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS workout_history_device_idx
  ON workout_history (device_id, completed_at DESC);
