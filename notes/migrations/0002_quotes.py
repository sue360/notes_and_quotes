# Generated by Django 4.1.4 on 2022-12-08 16:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notes', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='quotes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Content', models.CharField(max_length=240)),
                ('Created_at', models.DateTimeField(max_length=50)),
                ('Background_info', models.CharField(max_length=400)),
            ],
        ),
    ]