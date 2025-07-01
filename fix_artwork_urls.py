import json
import re
import os

# 현재 스크립트 위치 기준으로 절대 경로 설정
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
INPUT = os.path.join(BASE_DIR, 'src', 'assets', 'artworks.json')
OUTPUT = os.path.join(BASE_DIR, 'src', 'assets', 'artworks.json')  # 같은 파일에 덮어쓰기

# AWS 콘솔 URL → 정상 S3 URL로 바꾸는 정규식
console_re = re.compile(
    r'^https://[a-z0-9\-]+\.console\.aws\.amazon\.com/s3/object/'
    r'(?P<bucket>[^?]+)\?[^&]*&bucketType=[^&]*&prefix=(?P<path>.+)$'
)

def transform_url(url: str) -> str:
    m = console_re.match(url)
    if not m:
        return url  # 바꿀 게 없으면 그대로 반환
    bucket = m.group('bucket')
    path = m.group('path')
    return f'https://{bucket}.s3.ap-northeast-2.amazonaws.com/{path}'

def walk_and_fix(obj):
    if isinstance(obj, dict):
        for k, v in obj.items():
            if k == 'url' and isinstance(v, str):
                obj[k] = transform_url(v)
            else:
                walk_and_fix(v)
    elif isinstance(obj, list):
        for item in obj:
            walk_and_fix(item)

def main():
    with open(INPUT, 'r', encoding='utf-8') as f:
        data = json.load(f)

    walk_and_fix(data)

    with open(OUTPUT, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print(f'✅ 변환 완료: {OUTPUT}')

if __name__ == '__main__':
    main()
