# Скрипт для переименования изображений
# Запустите этот скрипт из корневой папки проекта

Write-Host "Переименование изображений..." -ForegroundColor Green

# Предполагаем, что вы загрузили 5 фото в папку images/
# Переименуйте их в правильном порядке

# Если ваши файлы называются по-другому, измените пути ниже

# Пример: если ваши файлы называются image1.jpg, image2.jpg и т.д.
# Раскомментируйте и измените названия:

# Rename-Item -Path "images\image1.jpg" -NewName "students-campus.jpg"
# Rename-Item -Path "images\image2.jpg" -NewName "students-indoor.jpg"
# Rename-Item -Path "images\image3.jpg" -NewName "campus-building.jpg"
# Rename-Item -Path "images\image4.jpg" -NewName "student-coding.jpg"
# Rename-Item -Path "images\image5.jpg" -NewName "engineering-lab.jpg"

Write-Host "Готово! Проверьте папку images/" -ForegroundColor Cyan
Write-Host ""
Write-Host "Нужные имена файлов:" -ForegroundColor Yellow
Write-Host "  1. students-campus.jpg    (группа студентов на улице)"
Write-Host "  2. students-indoor.jpg     (студенты в помещении)"
Write-Host "  3. campus-building.jpg     (здание кампуса)"
Write-Host "  4. student-coding.jpg      (студентка за компьютером)"
Write-Host "  5. engineering-lab.jpg     (работа с электроникой)"

