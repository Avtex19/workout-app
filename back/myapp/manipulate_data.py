import sqlite3

# Connect to the SQLite database (or create a new one if it doesn't exist)
conn = sqlite3.connect('../../back/db.sqlite3')

# Create a cursor object to execute SQL queries
cursor = conn.cursor()

# Insert data into the 'workout_category' table
workout_types = [
    (1, 'Chest'),
    (2, 'Back'),
    (3, 'Bicep'),
    (4, 'Shoulder'),
    (5, 'Arm'),
    (6, 'Leg'),
    (7, 'Tricep'),
    (8, "Trapezius"),
    (9, "Cardio")
]



cursor.executemany('INSERT INTO myapp_workout_category (workout_type_id, workout_name) VALUES (?, ?)', workout_types)

# Insert data into the 'workouts' table
workouts_data = [
    # Chest workouts
    ('Push-ups', 3, 3, 1,
     'Push-ups are a bodyweight exercise that primarily targets the chest, shoulders, and triceps.'),
    ('Bench Press', 4, 4, 1, 'The bench press is a compound exercise that targets the chest, shoulders, and triceps.'),
    ('Dumbbell Flyes', 3, 3, 1,
     'Dumbbell flyes isolate the chest muscles and are great for building mass and definition.'),
    ('Chest Dips', 2, 2, 1,
     'Chest dips primarily target the lower chest muscles and also engage the triceps and shoulders.'),
    (
        'Incline Bench Press', 3, 3, 1,
        'The incline bench press targets the upper chest muscles, shoulders, and triceps.'),
    ('Cable Crossover', 3, 3, 1,
     'Cable crossovers are a great isolation exercise for the chest, emphasizing the inner and outer pecs.'),
    ('Machine Chest Press', 3, 3, 1,
     'Machine chest press is a variation of the bench press using a machine, providing stability and controlled '
     'resistance.'),
    ('Decline Bench Press', 4, 4, 1,
     'The decline bench press targets the lower chest muscles and also engages the triceps and shoulders.'),
    # Back workouts
    ('Pull-ups', 3, 3, 2, 'Pull-ups are a compound exercise that targets the back, biceps, and forearms.'),
    ('Deadlifts', 4, 4, 2,
     'Deadlifts are a compound exercise that targets the entire back, as well as the glutes, hamstrings, and core.'),
    ('Bent-over Rows', 3, 3, 2,
     'Bent-over rows target the middle and upper back muscles, as well as the biceps and forearms.'),
    ('Lat Pulldowns', 3, 3, 2,
     'Lat pulldowns target the latissimus dorsi muscles of the back, helping to build width and strength.'),
    ('Seated Cable Rows', 3, 3, 2,
     'Seated cable rows target the middle back muscles, helping to improve thickness and definition.'),
    ('T-Bar Rows', 3, 3, 2,
     'T-bar rows target the upper back muscles and are great for building overall back strength and size.'),
    ('One-arm Dumbbell Rows', 3, 3, 2,
     'One-arm dumbbell rows target the latissimus dorsi and rhomboid muscles, as well as the biceps and forearms.'),
    ('Hyperextensions', 2, 2, 2,
     'Hyperextensions, also known as back extensions, target the lower back muscles and help to improve spinal '
     'erector strength and stability.'),
    # Bicep workouts
    ('Bicep Curls', 3, 3, 3,
     'Bicep curls isolate the biceps muscles and are great for building size and strength in the arms.'),
    (
        'Hammer Curls', 2, 2, 3,
        'Hammer curls target the biceps brachii and brachialis muscles, as well as the forearms.'),
    ('Preacher Curls', 4, 4, 3,
     'Preacher curls target the biceps muscles and help to isolate them, allowing for a greater range of motion and '
     'contraction.'),
    ('Concentration Curls', 2, 2, 3,
     'Concentration curls target the biceps muscles and are performed sitting down, focusing on one arm at a time for '
     'maximum isolation and contraction.'),
    ('EZ Bar Curls', 3, 3, 3,
     'EZ bar curls target the biceps muscles and are performed with an EZ curl bar, allowing for a more natural grip '
     'and wrist position.'),
    ('Reverse Curls', 3, 3, 3,
     'Reverse curls target the brachioradialis muscle of the forearm, as well as the biceps brachii, helping to '
     'improve forearm and grip strength.'),
    ('Cable Curls', 3, 3, 3,
     'Cable curls target the biceps muscles and provide constant tension throughout the entire range of motion, '
     'helping to maximize muscle growth and strength.'),
    ('Incline Dumbbell Curls', 3, 3, 3,
     'Incline dumbbell curls target the biceps muscles and are performed on an incline bench, allowing for a greater '
     'stretch and contraction of the muscle fibers.'),
    # Shoulder workouts
    ('Shoulder Press', 3, 3, 4,
     'Shoulder press, also known as overhead press, targets the deltoid muscles of the shoulders, as well as the '
     'triceps.'),
    ('Lateral Raises', 3, 3, 4,
     'Lateral raises target the lateral deltoids, helping to build width and definition in the shoulders.'),
    ('Front Raises', 2, 2, 4,
     'Front raises target the anterior deltoids, as well as the upper chest muscles and trapezius.'),
    ('Upright Rows', 3, 3, 4,
     'Upright rows target the traps, lateral deltoids, and upper back muscles, helping to improve shoulder and upper '
     'body strength.'),
    ('Arnold Press', 3, 3, 4,
     'Arnold press is a shoulder exercise that targets all three heads of the deltoids, providing a full range of '
     'motion and a greater stretch at the bottom of the movement.'),
    ('Shrugs', 3, 3, 4,
     'Shrugs target the trapezius muscles of the upper back and neck, helping to build size and strength in this area.'
     ),
    ('Reverse Flyes', 3, 3, 4,
     'Reverse flyes target the rear deltoids and upper back muscles, helping to improve posture and shoulder stability.'
     ),
    ('Face Pulls', 3, 3, 4,
     'Face pulls target the rear deltoids, upper back, and rotator cuff muscles, helping to improve shoulder health '
     'and stability.'),
    # Arm workouts
    ('Tricep Dips', 3, 3, 5,
     'Tricep dips target the triceps muscles and are performed using parallel bars or a bench, providing an effective '
     'bodyweight exercise for building arm strength.'),
    ('Skull Crushers', 3, 3, 5,
     'Skull crushers target the triceps muscles and are performed lying on a bench with a barbell or dumbbells, '
     'providing an effective isolation exercise for building arm strength.'),
    ('Close Grip Bench Press', 4, 4, 5,
     'Close grip bench press targets the triceps muscles and is performed with a narrower grip than the traditional '
     'bench press, emphasizing the triceps over the chest muscles.'),
    ('Tricep Kickbacks', 2, 2, 5,
     'Tricep kickbacks target the triceps muscles and are performed using dumbbells, providing an effective isolation '
     'exercise for building arm strength and definition.'),
    ('Tricep Rope Pushdowns', 3, 3, 5,
     'Tricep rope pushdowns target the triceps muscles and are performed using a cable machine and rope attachment, '
     'providing constant tension throughout the movement for maximum muscle growth.'),
    ('Diamond Push-ups', 2, 2, 5,
     'Diamond push-ups target the triceps muscles and are performed with the hands close together in a diamond shape, '
     'providing an effective bodyweight exercise for building arm strength and definition.'),
    ('Overhead Tricep Extension', 3, 3, 5,
     'Overhead tricep extension targets the triceps muscles and is performed using a dumbbell or cable machine, '
     'providing an effective isolation exercise for building arm strength and definition.'),
    ('Tricep Bench Dips', 3, 3, 5,
     'Tricep bench dips target the triceps muscles and are performed using a bench or chair, providing an effective '
     'bodyweight exercise for building arm strength and definition.'),
    # Leg workouts
    ('Squats', 4, 4, 6,
     'Squats target the quadriceps, hamstrings, glutes, and lower back muscles, providing a full-body exercise for '
     'building leg strength and size.'),
    ('Lunges', 3, 3, 6,
     'Lunges target the quadriceps, hamstrings, and glutes, as well as the core muscles, providing a unilateral '
     'exercise for improving balance, stability, and strength.'),
    ('Leg Press', 3, 3, 6,
     'Leg press targets the quadriceps, hamstrings, and glutes, providing a compound exercise for building lower body '
     'strength and size.'),
    ('Deadlifts', 4, 4, 6,
     'Deadlifts target the hamstrings, glutes, lower back, and traps, providing a full-body exercise for building '
     'strength and power.'),
    ('Leg Curls', 3, 3, 6,
     'Leg curls target the hamstrings muscles and are performed using a leg curl machine, providing an effective '
     'isolation exercise for building leg strength and definition.'),
    ('Calf Raises', 3, 3, 6,
     'Calf raises target the calf muscles and are performed using bodyweight, dumbbells, or a calf raise machine, '
     'providing an effective exercise for building calf strength and size.'),
    ('Step-ups', 3, 3, 6,
     'Step-ups target the quadriceps, hamstrings, and glutes, as well as the core muscles, providing a unilateral '
     'exercise for improving balance, stability, and strength.'),
    ('Box Jumps', 2, 2, 6,
     'Box jumps target the quadriceps, hamstrings, and glutes, as well as the core muscles, providing an explosive '
     'plyometric exercise for building lower body power and athleticism.'),
    # Triceps workouts
    ('Tricep Pushdowns', 3, 3, 7,
     'Tricep pushdowns target the triceps muscles and are performed using a cable machine and straight or V-bar '
     'attachment, providing an effective isolation exercise for building arm strength and definition.'),
    ('Overhead Tricep Extension', 2, 2, 7,
     'Overhead tricep extension targets the triceps muscles and is performed using a dumbbell, barbell, '
     'or cable machine, providing an effective isolation exercise for building arm strength and definition.'),
    ('Tricep Rope Pulls', 3, 3, 7,
     'Tricep rope pulls target the triceps muscles and are performed using a cable machine and rope attachment, '
     'providing constant tension throughout the movement for maximum muscle growth.'),
    ('Diamond Push-ups', 2, 2, 7,
     'Diamond push-ups target the triceps muscles and are performed with the hands close together in a diamond shape, '
     'providing an effective bodyweight exercise for building arm strength and definition.'),
    ('Close Grip Bench Press', 4, 4, 7,
     'Close grip bench press targets the triceps muscles and is performed with a narrower grip than the traditional '
     'bench press, emphasizing the triceps over the chest muscles.'),
    ('Dips', 3, 3, 7,
     'Dips target the triceps muscles and are performed using parallel bars or a bench, providing an effective '
     'bodyweight exercise for building arm strength and definition.'),
    ('Skull Crushers', 3, 3, 7,
     'Skull crushers target the triceps muscles and are performed lying on a bench with a barbell or dumbbells, '
     'providing an effective isolation exercise for building arm strength.'),
    ('Tricep Kickbacks', 3, 3, 7,
     'Tricep kickbacks target the triceps muscles and are performed using dumbbells, providing an effective isolation '
     'exercise for building arm strength and definition.'),
    # Trapezius workouts
    ('Barbell Shrugs', 3, 3, 8,
     'Barbell shrugs target the trapezius muscles of the upper back and neck, helping to build size and strength in '
     'this area.'),
    ('Dumbbell Shrugs', 3, 3, 8,
     'Dumbbell shrugs target the trapezius muscles of the upper back and neck, helping to build size and strength in '
     'this area.'),
    ('Upright Rows', 3, 3, 8,
     'Upright rows target the traps, lateral deltoids, and upper back muscles, helping to improve shoulder and upper '
     'body strength.'),
    ('Face Pulls', 3, 3, 8,
     'Face pulls target the rear deltoids, upper back, and rotator cuff muscles, helping to improve shoulder health '
     'and stability.'),
    ("Farmer's Walk", 2, 2, 8, "Farmer's walk primarily targets the trapezius, forearms, and grip strength."),
    ('Deadlift Shrug Combo', 3, 3, 8,
     'The deadlift shrug combo is a compound exercise that targets the traps, lower back, and hamstrings.'),
    ('Trapezius Stretch', 2, 2, 8,
     'The trapezius stretch is a static stretch that targets the trapezius muscles, helping to improve flexibility '
     'and reduce tension.'),
    ('Cable Face Pulls', 3, 3, 8,
     'Cable face pulls target the rear deltoids, upper back, and rotator cuff muscles, helping to improve shoulder '
     'health and stability.'),
    # Cardio workouts
    ('Running', 1, 4, 9,
     'Running is a cardiovascular exercise that can be done indoors or outdoors, providing an effective way to '
     'improve cardiovascular health and endurance.'),
    ('Cycling', 1, 4, 9,
     'Cycling is a low-impact cardiovascular exercise that can be done indoors or outdoors, providing an effective '
     'way to improve cardiovascular health and leg strength.'),
    ('Jump Rope', 1, 4, 9,
     'Jump rope is a high-intensity cardiovascular exercise that can be done almost anywhere, providing an effective '
     'way to improve cardiovascular health, agility, and coordination.'),
    ('Swimming', 1, 4, 9,
     'Swimming is a full-body cardiovascular exercise that is easy on the joints, providing an effective way to '
     'improve cardiovascular health, endurance, and muscle tone.'),
    ('Stair Climbing', 1, 4, 9,
     'Stair climbing is a cardiovascular exercise that targets the lower body muscles, including the quadriceps, '
     'hamstrings, glutes, and calves, providing an effective way to improve cardiovascular health and leg strength.'),
    ('Rowing', 1, 4, 9,
     'Rowing is a full-body cardiovascular exercise that targets the back, shoulders, arms, and legs, providing an '
     'effective way to improve cardiovascular health, strength, and endurance.'),
    ('Elliptical Trainer', 1, 4, 9,
     'The elliptical trainer is a low-impact cardiovascular exercise that targets the legs, arms, and core muscles, '
     'providing an effective way to improve cardiovascular health and endurance.'),
    ('High-Intensity Interval Training (HIIT)', 1, 4, 9,
     'HIIT is a form of cardiovascular exercise that alternates between short bursts of intense activity and periods '
     'of rest or lower-intensity exercise, providing an effective way to burn calories, improve cardiovascular '
     'health, and increase metabolism.')
]


cursor.executemany(
    'INSERT INTO myapp_workout (workout_name, workout_sets_n, workout_set_duration_m, workout_category_id, description) VALUES (?, ?, ?, ?, ?)',
    workouts_data
)

# Commit the changes and close the connection
conn.commit()
conn.close()